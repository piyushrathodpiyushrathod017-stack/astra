import { AnimatedHomepage } from "@/components/shared/animated-homepage";
import {
  StructuredDataScript,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <StructuredDataScript data={generateWebsiteStructuredData()} />
      <StructuredDataScript data={generateOrganizationStructuredData()} />
      <AnimatedHomepage />
    </>
  );
}
