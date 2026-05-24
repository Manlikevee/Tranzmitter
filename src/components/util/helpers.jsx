export const isEmail = (value = "") => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};

export const maskEmail = (email = "") => {
  if (!isEmail(email)) return email;

  const [name, domain] = email.split("@");

  if (name.length <= 2) {
    return `${name[0]}*@${domain}`;
  }

  return `${name[0]}${"*".repeat(name.length - 2)}${name[name.length - 1]}@${domain}`;
};

export const getRedactedSubtitle = (value = "") => {
  return isEmail(value) ? maskEmail(value) : value;
};
