export class AuthService {
  static async LogIn(context, user) {
    let responses
    try {

      await context.$axios
        .$post('/auth/login', { email: user.email, password: user.password })
        .then((response) => {
          // console.log(response)
          responses = response;
        })
    } catch (error) {
      console.log(error)
    }
    return responses;
  }
}