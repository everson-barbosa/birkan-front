import { IndicatorBox } from "./components/indicator-box/indicator-box";

export function ExamApplicationsSection() {
  return (
    <section>
      <h2 className="text-lg font-semibold my-2">Exam applications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <IndicatorBox title="Scheduled" status="scheduled" />
        <IndicatorBox title="In progress" status="in-progress" />
        <IndicatorBox title="Finished" status="finished" />
        <IndicatorBox title="Canceled" status="canceled" />
      </div>
    </section>
  ) 
}