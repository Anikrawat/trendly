import { Button } from "@/components/ui/button";
import { signIn } from "@/utils/actions";

const loginPage = () => {
  return (
    <form>
      <Button formAction={signIn}>
        sign-in
      </Button>
    </form>
  )
}

export default loginPage;
