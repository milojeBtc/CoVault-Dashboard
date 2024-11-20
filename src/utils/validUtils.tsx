export async function validateUsername(username: string) {
  if (!username || username == "~") return false;
  return true;
}

export async function validateTwitterUrl(twitterUrl: string) {
  if (!twitterUrl || twitterUrl == "~") return false;
  let re = new RegExp("^(?:http://)?(?:www\\.)?twitter|x\\.com/(\\w+)$", "i");
  return re.test(twitterUrl);
}

export async function validateTelegramUrl(tgUrl: string) {
  if (!tgUrl || tgUrl == "~") return false;
  let re = new RegExp(
    "^(?:|(https?://)?(|www)[.]?((t|telegram).me)/)[a-zA-Z0-9_]{5,32}$"
  );
  return re.test(tgUrl);
}

export async function validateEmail(email: string) {
  if (!email || email == "~") return false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
