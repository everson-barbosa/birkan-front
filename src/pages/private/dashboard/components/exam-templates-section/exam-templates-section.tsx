import { IndicatorBox } from "./components/indicator-box/indicator-box";

export function ExamTemplatesSection() {


  return (
    <section>
      <h2 className="text-lg font-semibold my-2">Exam templates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">     
        <IndicatorBox title="Sketch" status="sketch" />
        <IndicatorBox title="Published" status="published" />
        <IndicatorBox title="Canceled" status="canceled" />
      </div>
    </section>
  )
}