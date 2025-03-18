"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface BookingHistoryFiltersProps {
  onStatusChange: (status: string) => void;
  onDateChange: (date: string) => void;
}

export function BookingHistoryFilters({ onStatusChange, onDateChange }: BookingHistoryFiltersProps) {
  const [status, setStatus] = useState("all");
  const [date, setDate] = useState("june-2025");

  const handleStatusChange = (value: string) => {
    setStatus(value);
    onStatusChange(value); // Notify parent component
  };

  const handleDateChange = (value: string) => {
    setDate(value);
    onDateChange(value); // Notify parent component
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <div className="relative">
          <Input type="search" placeholder="Search by TNR" className="pl-10 w-full md:w-[300px]" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Select value={status} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-full md:w-[150px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="reserved">Reserved</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={date} onValueChange={handleDateChange}>
          <SelectTrigger className="w-full md:w-[150px]">
            <SelectValue placeholder="June, 2025" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="june-2025">June, 2025</SelectItem>
            <SelectItem value="may-2025">May, 2025</SelectItem>
            <SelectItem value="april-2025">April, 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}