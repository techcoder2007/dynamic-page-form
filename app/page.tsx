import CardStatsWrapper from "@/components/shared/CardStatsWrapper";
import CreateFormBtn from "@/components/shared/Form/CreteFormBtn";


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3">
        <CreateFormBtn />
      </div>
    </div>
  );
}
