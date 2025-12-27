
import About from "./component/About";
import About2 from "./component/About2";
import AnimatedCard from "./component/AnimatedCard";
import Compare from "./component/Compare";
import Contact from "./component/Contact";
import Cta from "./component/Cta";
import Faq from "./component/Faq";
import LineProcess from "./component/LineProcess";
import Pricing from "./component/Pricing";
import Process from "./component/Process";
import ReviewSection from "./component/ReviewSection";
import StackReview from "./component/StackReview";
import TextReveal from "./component/TextReveal";
import VideoSection from "./component/VideoSection";
import WidgetSection from "./component/WidgetSection";

export default function Home() {
  return (
    <div className="">
      <div>
        <VideoSection />
        <About />
        <WidgetSection />
        <About2 />

        <ReviewSection />
        <Compare />
        <StackReview />
        <AnimatedCard />
        <LineProcess />
        <TextReveal />
        {/* <Process /> */}
        <Pricing />
        <Contact />
        <Cta />
        <Faq />
      </div>

    </div>
  );
}
