const { User, Elements, Compounds } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('elements');
    },
    user: async (parent, _, context) => {
      return User.findOne({ _id: context.user }).populate('elements');
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
        return User.findOne({ _id: context.user._id }).populate("elements").select("-__v -password");
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
    savedElements: async (parent, {elementData}, context ) =>{ 
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {elements: elementData}},
          {new: true},
          ).populate('elements');
          console.log(updatedUser);
          return updatedUser;
      }  
    throw AuthenticationError
    },
    deleteElement: async (parent, {elementData}, {user} ) =>{ 
      if (user) {
        const updatedUser = await User.findOneAndUpdate(
          {_id: user._id},
          {$pull: {elements: elementData}},
          {new: true},
          )
          return updatedUser;
      }  
    throw AuthenticationError
    }
  },
};

module.exports = resolvers;

