const { User, Elements, Compounds } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('');
    },
    user: async (parent, { userId}) => {
      return User.findOne({ _id: userId }).populate('');
    },
    elements: async() => {
      return Elements.find();
    },
    element: async (parent, { name }, context) => {
      return Elements.findOne({ name });
    },
    compounds: async() => {
      
      return Compounds.find();
    },
    compound: async (parent, { name}) => {

      try{

         const compoundData = await Compounds.findOne({ name });
         if (!compoundData){
          console.log('not found')
         }
         return compoundData
      }
      catch(err){
          console.log(err)
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

