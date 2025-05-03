import { IndicatorBox } from "./components/indicator-box/indicator-box";

export function ExamTemplatesSection() {


  return (
    <section>
      <h2>Exam templates</h2>

      <div>
        <IndicatorBox title="Sketch" status="sketch" />
        <IndicatorBox title="Published" status="published" />
        <IndicatorBox title="Canceled" status="canceled" />
      </div>
    </section>
  )
}