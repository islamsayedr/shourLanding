import Btn from "../base/Btn";

export default function Values() {
  return (
    <>
      <Value
        illu="./illu/01.svg"
        dir="rtl"
        title="تقرير التحليل الشامل"
        name="اكتشف امكانات اتخاذ القرارات المثلى باستخدام تقارير التحليل"
        des="اكتشف امكانات اتخاذ القرارات الصائبة باستخدام تقارير التحليل القابلة للتخصيص فى التطبيق, اعرض الارقام والرسوم البيانيه والبيانات التاريخيه لاكثر من 10 سنوات, قم بتعديل التقرير حسب تفضيلاتك باضافة او تعديل الرسوم البيانيه والارقام لاعداد التقرير بالشكل الذى تريده ليقدم لك تجربه تحليليه مخصصه لك شخصيا."
      />
      <Value illu="./illu/01.svg" />
    </>
  );
}

function Value({ dir, illu, title, des, name }) {
  return (
    <section style={{ direction: dir }}>
      <div>
        <div>
          <div>
            <span>{name}</span>
            <h2>{title}</h2>
          </div>
          <p>{des}</p>
        </div>
        <Btn text="تسجيل دخول" icon="" link="#" type="s" size="m" />
      </div>
      <img src={illu} />
    </section>
  );
}
