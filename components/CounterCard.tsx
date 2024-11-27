import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/AnimatedCounter";

interface CounterCardProps {
    targetValue: number;
    duration: number;
    label: string;
}

const CounterCard = ({ targetValue, duration, label }: CounterCardProps) => {
    return (
        <Card className="relative overflow-hidden p-4 !shadow-none">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <AnimatedCounter targetValue={targetValue} duration={duration} label={label} />
            </CardContent>
        </Card>
    );
};

export default CounterCard;
