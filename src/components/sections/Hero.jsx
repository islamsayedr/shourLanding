import Btn from "../base/Btn";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h1>احصل على الادوات<br/> التى تساعدك فى نجاح <span>استثمارك</span></h1>
        <p>
          مرحبًا في <b>شور</b>، التطبيق المتميز فى مجال تحليل الاسهم حيث نساعدك على
          الاستثمار الذكى الذى يعتمد على تحليل البيانات لنمكنك من اتخاذ قرارات
          استثمارية, اكتشف مرونة تطبيق شور المتكامل لتحليل الاسهم والذى
          صممناه لجمع اهم بيانات الاسهم وعرضها بشكل مبتكر يساعدك فى تقييم
          قراراتك الاستثمارية, جرب مجموعة منتجاتنا المتنوعة فى تطبيق شور
          والمصممه لتعزيز نجاح رحلتك الاستثماريه
        </p>
      </div>
      <div className="actions">
        <Btn text="تعرف على المزيد" link="#values" type="s" size="lg" icon="./icons/arrowDown.svg"/>
        <Btn text="ابدأ الان" link="https://go.shour.app" type="p" size="lg" icon="./icons/arrowLeft.svg"/>
      </div>
    </section>
  );
}
