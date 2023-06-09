import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },

  //-------------customize username and userId ------------------
  callbacks: {
    async session({session , user , token}) {
      session.user.username = session.user.name
        .split(" ")
        .join("_")
        .toLocaleLowerCase();

      session.user.userId = token.sub 
      return session;
    },
  }


}

export default NextAuth(authOptions)