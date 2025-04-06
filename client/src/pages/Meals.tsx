import { useState, useEffect } from "react";
import DailyMeals from "../components/DailyMeals";
import { MealData } from "../interfaces/MealData";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { TripData } from "../interfaces/TripData";

export default function Meals() {
  const [trip, setTrip] = useState<TripData | null>(null);
  const [meals, setMeals] = useState<MealData[][]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const defaultMeal: MealData = {
      id: null,
      mealType: "",
      mealName: "",
      crewMember: "",
      tripId: "",
    };

    async function fetchTrip() {
      const res = await fetch(`/api/trips/${id}`);
      const data = await res.json();

      setTrip({
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      });

      const numDays = getMealDates(
        new Date(data.startDate),
        new Date(data.endDate)
      ).length;

      const mealsWithTripId = Array(numDays)
        .fill(null)
        .map(() => [
          { ...defaultMeal, mealType: "Breakfast", tripId: data.id },
          { ...defaultMeal, mealType: "Lunch", tripId: data.id },
          { ...defaultMeal, mealType: "Dinner", tripId: data.id },
        ]);
      setMeals(mealsWithTripId);
    }
    fetchTrip();
  }, [id]);

  if (!trip) {
    return (
      <div className="text-center mt-10 text-textBody font-body text-lg">
        Loading...
      </div>
    );
  }

  function getMealDates(startDate: Date, endDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  const tripDates = getMealDates(trip.startDate, trip.endDate);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="bg-light-neutral min-h-screen py-10 px-4 font-body text-textBody">
          <h1 className="text-4xl font-header text-primary mb-6 text-center">
            Meal Plan
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-header text-dark-accent mb-4">
                Trip Details
              </h2>
              <p className="mb-2">
                <strong>River Name:</strong> {trip.riverName}
              </p>
              <p>
                <strong>Dates:</strong> {trip.startDate.toLocaleDateString()} –{" "}
                {trip.endDate.toLocaleDateString()}
              </p>
            </div>

            <div className="col-12 col-md-6 overflow-y-auto max-h-[80vh] pr-2">
              {tripDates.map((date, i) => (
                <div key={date.toISOString()} className="mb-6">
                  <h2 className="text-xl font-bold mb-2">
                    {date.toDateString()}
                  </h2>
                  {meals[i].map((meal, j) => (
                    <DailyMeals
                      key={date.toISOString()}
                      date={date}
                      index={i + 1}
                      endDate={trip.endDate}
                      meal={meal}
                      onMealChange={(field, value) => {
                        const updated = [...meals];
                        updated[i][j] = {
                          ...meals[i][j],
                          [field]: value,
                        };
                        setMeals(updated);
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
