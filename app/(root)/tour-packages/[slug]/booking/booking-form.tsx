'use client'

import { useTransition, useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import Select from 'react-select'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitBooking } from "./actions"
import { toast } from "sonner"
import { City, Country, TourOptionWithQuantityProp } from "@/type"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    address: z.string().min(4, "Address must be at least 4 characters"),
    country: z.object({
        value: z.string(),
        label: z.string(),
    }),
    city: z.object({
        value: z.string(),
        label: z.string(),
    }),
    additionalInfo: z.string().optional(),
})

interface BookingFormProps {
    tourSlug: string
    title?: string
    parsedTourOption?: TourOptionWithQuantityProp
    total?: number
}

export function BookingForm({ tourSlug, title, parsedTourOption, total }: BookingFormProps) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState<{ value: string; label: string }[]>([])
    const [selectedCountry, setSelectedCountry] = useState<{ value: string; label: string } | null>(null)
    const [cities, setCities] = useState<{ value: string; label: string }[]>([])
    const [isLoadingCountries, setIsLoadingCountries] = useState(false)
    const [isLoadingCities, setIsLoadingCities] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            country: { value: "", label: "" },
            city: { value: "", label: "" },
            additionalInfo: "",
        },
    })

    const { setValue } = form

    const fetchCountries = async () => {
        setIsLoadingCountries(true);
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            if (!response.ok) {
                throw new Error('Failed to fetch countries');
            }
            const data = await response.json();
            const formattedCountries = data
                .map((country: Country) => ({
                    value: country.cca2,
                    label: country.name.common,
                }))
                .sort((a: { value: string; label: string }, b: { value: string; label: string }) =>
                    a.label.localeCompare(b.label)
                );
            setCountries(formattedCountries);
        } catch (error) {
            console.error('Error fetching countries:', error);
            toast.error('Failed to load countries. Please try again.');
            setCountries([]);
        } finally {
            setIsLoadingCountries(false);
        }
    };

    const fetchCities = useCallback(async () => {
        if (!selectedCountry?.value) {
            setCities([]);
            return;
        }

        setIsLoadingCities(true);
        try {
            const response = await fetch(`/api/cities?country=${selectedCountry.value}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cities');
            }
            const data = await response.json();
            if (data.geonames?.length) {
                const formattedCities = data.geonames.map((city: City) => ({
                    value: city.geonameId.toString(),
                    label: city.name,
                }));
                setCities(formattedCities);
            } else {
                setCities([]);
                toast.error('No cities found for the selected country.');
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
            toast.error('Failed to load cities. Please try again.');
            setCities([]);
        } finally {
            setIsLoadingCities(false);
        }
    }, [selectedCountry]);

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        fetchCities();
    }, [fetchCities]);

    useEffect(() => {
        // Reset city when country changes
        setValue('city', { value: "", label: "" });
    }, [selectedCountry, setValue]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            try {
                await submitBooking({
                    ...values,
                    country: values.country.label,
                    city: values.city.label,
                }, title, parsedTourOption, total)
                toast.success("Booking submitted successfully!")
                router.push(`/tour-packages/${tourSlug}/booking/success`)
            } catch (error) {
                toast.error(`Failed to submit booking. Please try again. ${error}`)
            }
        })
    }



    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g Martey Jamel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="mjmartey@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+2234567890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            options={countries}
                                            isLoading={isLoadingCountries}
                                            placeholder="Select your country"
                                            onChange={(option) => {
                                                field.onChange(option);
                                                setSelectedCountry(option);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={() => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Controller
                                            name="city"
                                            control={form.control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={cities}
                                                    isLoading={isLoadingCities}
                                                    placeholder="Select your city"
                                                    isDisabled={!selectedCountry?.value}
                                                    onChange={(option) => field.onChange(option)}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter your full address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="additionalInfo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Additional Information</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Please provide additional details to help us prepare for your visit. This could include dietary preferences, allergies, or any specific requirements."
                                            style={{ height: '150px' }}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Submitting..." : "Complete Booking"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
