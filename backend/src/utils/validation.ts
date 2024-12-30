import validator from 'validator'

export const validateSignUpData = async (c:any) => {
  const { firstName, lastName, email, password } = await c.req.json();

  if (!firstName || !lastName){
    throw new Error("Name is not valid!");
  }
  else if (firstName.length < 4 || firstName.length > 50){
    throw new Error("firstName should be 4 to 50 characters! ")
  }

  if (!validator.isEmail(email)){
    throw new Error("Email is not valid!");
  }
  

  if (!validator.isStrongPassword(password)){
    throw new Error("Enter strong password!")
  }
}