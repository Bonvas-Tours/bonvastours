"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { Tourist } from "@prisma/client";

interface TouristProfileSheetProps {
    tourist: Tourist
}

export function TouristProfileSheet({ tourist }: TouristProfileSheetProps) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                    View Profile
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Tourist Profile</SheetTitle>
                </SheetHeader>

                {/* Tourist Contact Information */}
                <Card className="!shadow-none mt-6">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                            {tourist.firstname} {tourist.lastname}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                                <Phone className="h-3 w-3 text-muted-foreground" />
                            </div>
                            <span>{tourist.primaryNumber}</span>
                        </div>
                        {tourist.email && (
                            <div className="flex items-center gap-2 text-sm">
                                <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center">
                                    <Mail className="h-3 w-3 text-muted-foreground" />
                                </div>
                                <span>{tourist.email}</span>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Tourist Personal Information */}
                <Card className="!shadow-none mt-4">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="text-xs text-muted-foreground">Country</div>
                            <div className="text-sm">{tourist.country}</div>
                        </div>
                        <div>
                            <div className="text-xs text-muted-foreground">City</div>
                            <div className="text-sm">{tourist.city}</div>
                        </div>
                        <div>
                            <div className="text-xs text-muted-foreground">Address</div>
                            <div className="text-sm">{tourist.address}</div>
                        </div>
                        {tourist.specialRequirement && (
                            <div>
                                <div className="text-xs text-muted-foreground">Special Requirement</div>
                                <div className="text-sm">{tourist.specialRequirement}</div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </SheetContent>
        </Sheet>
    );
}