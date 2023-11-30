

const PasswordRequirements = ({ password }) => {
  const hasValidLength = password.length >= 8 && password.length <= 15;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  const isValid =
    hasValidLength && hasLowercase && hasUppercase && hasNumber && hasSpecialCharacter;

  return (
    <div className="passwordRequirements">
      <p style={{ color: isValid ? 'green' : password.length ? 'red' : 'gray' }}>
        
      </p>
      <ul className="passwordRequirements__ul">
        <li style={{ color: hasValidLength ? 'green' : 'gray' }}>От 8 до 15 символов{hasValidLength?<span>✅</span>:""}</li>
        <li style={{ color: hasLowercase ? 'green' : 'gray' }}>Иметь Строчные{hasLowercase?<span>✅</span>:""}</li>
        <li style={{ color: hasUppercase ? 'green' : 'gray' }}>Иметь прописные буквы{hasUppercase?<span>✅</span>:""}</li>
        <li style={{ color: hasNumber ? 'green' : 'gray' }}>Минимум 1 цифра{hasNumber?<span>✅</span>:""}</li>
        <li style={{ color: hasSpecialCharacter ? 'green' : 'gray' }}>
          Contain Минимум 1 спецсимвол  (!, ", #, $...){hasSpecialCharacter?<span>✅</span>:""}
        </li>
      </ul>
    </div>
  );
};

export default PasswordRequirements;
