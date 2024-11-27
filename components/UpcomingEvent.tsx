import { EventCard } from "@/components/EventCard";
import { events } from "@/content";



export function UpcomingEvents() {
    return (
        <>
            <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-bold">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        href={event.href}
                    />
                ))}
            </div>
        </>
    );
}
