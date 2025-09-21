import fs from 'fs';

const names = [
  'Ayush Kumar',
  'Priyanka Sharma',
  'Yatin Gill',
  'Vaishnavi Pandey',
  'Yash Verma',
  'Yashika Chauhan',
  'Himanshu Verma',
  'Khushi Pandey',
  'Aditya Kumar',
  'Anjali Sharma',
  'Arpit Tyagi',
  'Bhavya Kumari',
  'Divyansh Kumar',
  'Diksha Gupta',
  'Himanshu Kumar',
  'Himani Jain',
  'Mayank Sharma',
  'Neha Tiwari',
  'Pankaj Kumar',
  'Palak Goel',
  'Prince Kumar',
  'Shivani Sharma',
  'Shivam Kumar',
  'Sneha Chauhan',
  'Aksh Rajput',
  'Akshara Verma',
  'Atul Kumar',
  'Anuskha Sharma',
  'Gagan Verma',
  'Ishika Verma',
  'Nikhil Tyagi',
  'Meghna Gupta',
  'Mohit Kumar',
  'Manisha Jain',
  'Pranjal Chauhan',
  'Prachi Sharma',
  'Ritik Chaudhary',
  'Sajal Sharma',
  'Sahil Gupta',
  'Sara Vashistha',
  'Shubham Bhardwaj',
  'Shambhawi Shukla',
  'Sumit Chauhan',
  'Shruti Bhatnagar',
  'Tushar Garg',
  'Tanu Sharma',
  'Vansh Chaudhary',
  'Vanshika Sharma',
];

const usersData = names.map((name, idx) => {
  const pos = idx + 1;
  return {
    _id: `667994ff0aa756e3fcceb0${pos < 10 ? `0${pos}` : pos}`,
    name: name,
    email: `${name.replace(' ', '').toLowerCase()}@gmail.com`,
    password: 'pass1234',
    passwordConfirm: 'pass1234',
    gender: idx % 2 == 0 ? 'male' : 'female',
    photo: `user-${pos < 10 ? `0${pos}` : pos}.jpg`,
  };
});

// console.log(usersData);

fs.writeFileSync('temp.json', JSON.stringify(usersData), 'utf-8');
