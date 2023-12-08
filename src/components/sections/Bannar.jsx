import Btn from "../base/Btn";

export default function Bannar() {
  return (
    <section className="bannar">
      <div className="container">
        <div>اطلع على باقات الاشتراك</div>
        <Btn
          text="ابدأ الان"
          icon="./icons/arrowLeftDark.svg"
          link="https://go.shour.app"
          type="s"
          size="m"
        />
      </div>
    </section>
  );
}
