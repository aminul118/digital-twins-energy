import { CheckCircle } from "lucide-react";
import { content, coreValues } from "@/constant/corevalue";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/card";

const CoreValues = () => {
  return (
    <Container>
      <SectionTitle title="Our Core Values" />
      {content.map((item, i) => (
        <p
          key={i}
          className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground"
        >
          {item.value}
        </p>
      ))}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coreValues.map((value) => (
          <Card key={value.value}>
            <CheckCircle className="text-green-600 w-6 h-6" />
            <div>
              <span className="text-lg font-medium ">{value.value}</span>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CoreValues;
