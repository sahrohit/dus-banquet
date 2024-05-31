"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import { toast } from "sonner";
import { z } from "zod";

import sendContactEmail from "@/server/action/send-email";
import { EVENTS } from "@/config/events";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader } from "../ui/card";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Required",
  }),
  event_type: z.enum(EVENTS),
  contact_number: z
    .string()
    .min(8, {
      message: "Invalid Phone Number",
    })
    .max(15, {
      message: "Invalid Phone Number",
    }),
  event_date: z.coerce.date(),
  email: z.string().email({
    message: "Invalid Email",
  }),
});

const ContactForm = () => {
  const [isPending, startTransaction] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      event_type: "Weddings",
      contact_number: "",
      event_date: new Date(),
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.loading("Sending message...", {
      id: "contact-form",
    });

    startTransaction(async () => {
      const res = await sendContactEmail({
        value: {
          ...data,
          event_date: dayjs(data.event_date).format("MMMM D, YYYY"),
        },
      });

      if (res.success) {
        toast.success("We'll contact you soon.", {
          id: "contact-form",
        });
      } else {
        toast.error("Error occured. Please Try again.", {
          id: "contact-form",
        });
      }
    });
  };

  return (
    <div className="container ml-auto max-w-xl">
      <h2 className="my-4 text-3xl">Contact Us</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ram Bahadur" {...field} />
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
                    <Input placeholder="rambahadur@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="event_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Event Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {EVENTS.map((event) => (
                        <SelectItem key={event} value={event}>
                          {event}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="event_date"
              render={({ field }) => (
                <FormItem className="my-2.5 flex flex-col">
                  <FormLabel>Event Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            dayjs(field.value).format("MMMM D, YYYY")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <LuCalendar className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact_number"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="tel"
                      placeholder="98XXXXXXXX"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={isPending} type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
