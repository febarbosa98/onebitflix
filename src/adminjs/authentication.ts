import { AuthenticationOptions } from "@adminjs/express";
import { User } from "../models";
import bcrypt from 'bcrypt'

export const authenticationOptions: AuthenticationOptions = {
    authenticate: async (email, passowrd)=> {
      const user = await User.findOne({where: {email}})
      
      if (user && user.role === 'admin'){
        const matched = await bcrypt.compare(passowrd, user.password)
  
        if (matched) {
          return user
        }
      }
      return false
    },
    cookiePassword: 'senha-de-cookie'
  }