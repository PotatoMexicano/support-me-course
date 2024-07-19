import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserCheckIcon, UserIcon, UserRoundXIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cm from '@/public/images/cm.jpg'
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStatus() {

    const totalEmployees = 100;
    const employeesPresent = 80;
    const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Total employees</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <UserIcon />
                            <div className="text-5xl font-bold">{totalEmployees}</div>
                        </div>
                        <div>
                            <Button size="sm" asChild>
                                <Link href="/dashboard/employees">View all</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Employees present</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="flex gap-2">
                            {employeesPresentPercentage > 75 ?
                                <UserCheck2Icon /> :
                                <UserRoundXIcon />
                            }
                            <div className="text-5xl font-bold">{employeesPresent}</div>
                        </div>
                    </CardContent>

                    <CardFooter>
                        {employeesPresent > 75 ?
                            (<span className="flex text-xs gap-1 text-green-500 items-center">
                                <BadgeCheckIcon />
                                80% of employees are present
                            </span>)
                            :
                            (<span className="flex text-xs gap-1 text-red-500 items-center">
                                <AlertTriangleIcon />
                                Only {employeesPresent}% of employees are present
                            </span>)
                        }
                    </CardFooter>

                </Card>
                <Card className="border-primary flex flex-col">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Employee of the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2 items-center">
                        <Avatar>
                            <Image src={cm} alt="Employee of the month avatar" />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <span className="text-2xl font-semibold">Colin Murray!</span>
                    </CardContent>
                    <CardFooter className="flex gap-2 items-center text-xs text-card-foreground mt-auto">
                        <PartyPopperIcon className="text-primary" />
                        <span>Congratulations, Colin!</span>
                    </CardFooter>
                </Card>
            </div>

            <Card className="my-4">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <LaptopIcon />
                        <span>Employee work location trends</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="pl-0">
                    <WorkLocationTrends />
                </CardContent>
            </Card>
        </>
    )
}