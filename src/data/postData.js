import faker from "faker";

const postData = {
  posts: [
    {
      id: 1,
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      date: faker.date.past(),
      author: {
        name: faker.name.findName(),
        avitar: faker.image.avatar(),
      },
      mainImage: faker.image.cats(381, 155),
      likes: faker.datatype.number(100),
      comments: {
        numberOfComments: faker.datatype.number(100),
      },
    },
    {
      id: 2,
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      date: faker.date.past(),
      author: {
        name: faker.name.findName(),
        avitar: faker.image.avatar(),
      },
      mainImage: faker.image.cats(381, 155),
      likes: faker.datatype.number(100),
      comments: {
        numberOfComments: faker.datatype.number(100),
      },
    },
    {
      id: 3,
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      date: faker.date.past(),
      author: {
        name: faker.name.findName(),
        avitar: faker.image.avatar(),
      },
      mainImage: faker.image.cats(381, 155),
      likes: faker.datatype.number(100),
      comments: {
        numberOfComments: faker.datatype.number(100),
      },
    },
  ],
};

export default postData;
