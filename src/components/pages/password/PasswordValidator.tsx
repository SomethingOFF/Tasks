import { useState } from "react";
import validator from "validator";
const PasswordValidator = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const validate = (value: string) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[500px] flex flex-col">
        <input
          type="password"
          placeholder="enter the password"
          onChange={(event: any) => validate(event.target.value)}
        />
        <div>
          {errorMessage ? (
            <>
              <div className="text-green-500">Password is so Strong</div>
            </>
          ) : (
            <>
              <div className="text-red-500">password is not that so Strong</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordValidator;
