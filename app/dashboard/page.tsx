import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStatus from "./components/employees-stats";

export default function DashboardPage() {
    return (
        <>
        <Tabs defaultValue="employees">
            <TabsList className="mb-4">
                <TabsTrigger value="employees">Employees stats</TabsTrigger>
                <TabsTrigger value="teams">Teams stats</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
                <EmployeesStatus />
            </TabsContent>

            <TabsContent value="teams">Teams stats</TabsContent>
        </Tabs>
        </>
    )
}