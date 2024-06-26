class ApiFeatures {
  constructor(query, queryObj) {
    this.query = query;
    this.queryObj = queryObj;
  }

  filter() {
    let filteredObj = { ...this.queryObj };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((field) => delete filteredObj[field]);

    let queryStr = JSON.stringify(filteredObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    filteredObj = JSON.parse(queryStr);

    this.query = this.query.find(filteredObj);

    return this;
  }

  sort() {
    if (this.queryObj.sort) {
      const sortBy = this.queryObj.sort.replaceAll(',', ' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('city');
    }

    return this;
  }

  select() {
    if (this.queryObj.fields) {
      const fields = this.queryObj.fields.replaceAll(',', ' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = this.queryObj.page * 1 || 1;
    const limit = this.queryObj.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

export default ApiFeatures;
