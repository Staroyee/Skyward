const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    savedLaunches: [Launch]
  }

  type Launch {
    launchId: ID
    name: String
    status: String
    provider: String
    location: String
    date: String
    image: String
    webcastLive: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  input LaunchInput {
    launchId: ID
    name: String
    status: String
    provider: String
    location: String
    date: String
    image: String
    webcastLive: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    updateProfile(username: String, email: String, password: String): Profile
    login(email: String!, password: String!): Auth
    removeProfile: Profile
    saveLaunch(launch: LaunchInput): Profile
    removeLaunch(launchId: ID!): Profile
  }
`;

module.exports = typeDefs;
