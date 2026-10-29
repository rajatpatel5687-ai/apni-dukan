import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Demo ke liye koi bhi email/password chalega
        if (credentials?.email && credentials?.password) {
          return { id: "1", name: "Apna Customer", email: credentials.email }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
})

export { handler as GET, handler as POST }