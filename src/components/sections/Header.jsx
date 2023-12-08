import Btn from "../base/Btn"

export default function Header() {
  return (
    <header>
      <img src="./logoColored.svg" alt="Shour logo" />
      <div className="actions">
        <Btn text="انشاء حساب" icon="" link="https://go.shour.app" type="p" size="m"/>
        <Btn text="تسجيل دخول" icon="" link="https://go.shour.app" type="s" size="m"/>
      </div>
    </header>
  );
}
