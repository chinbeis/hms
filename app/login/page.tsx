export const runtime = 'nodejs'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '@/lib/auth';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Нэвтрэх</CardTitle>
          <CardDescription>
            И-мэйл болон нууц үгээ ашиглан нэвтэрнэ үү.
          </CardDescription>
        </CardHeader>
        <form
            action={async (formData) => {
                'use server';
                await signIn('credentials', formData);
            }}
        >
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Нэр</Label>
                    <Input id="name" name="name" type="text" placeholder="admin" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Нууц үг</Label>
                    <Input id="password" name="password" type="password" required />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Нэвтрэх</Button>
            </CardFooter>
        </form>
      </Card>
    </div>
  );
}
