import Btn from "../base/Btn"

export default function Header() {
  return (
    <header>
      <img src="./logoColored.svg" alt="Shour logo" />
      <div className="actions">
        <Btn text="انشاء حساب" icon="" link="#" type="p" size="m"/>
        <Btn text="تسجيل دخول" icon="" link="#" type="s" size="m"/>
      </div>
    </header>
  );
}
