public class StarPattern 
{
    public static void main(String[] args) 
    {
        for (int i = 1; i < 8; i += 2) 
        {
            for (int j = 0; j < 7 - i / 2; j++) 
            {
                System.out.print(" ");
            } // end inner for loop

            for (int j = 0; j < i; j++) 
            {
                System.out.print("*");
            } // end inner for loop

            System.out.print("\n");
        } // end for loop
        for (int i = 5; i > 0; i -= 2) 
        {
            for (int j = 0; j < 7 - i / 2; j++) 
            {
                System.out.print(" ");
            } // end inner for loop

            for (int j = 0; j < i; j++) 
            {
                System.out.print("*");
            } // end inner for loop

            System.out.print("\n");
        } // end for loop
    } // end main method
} // end class
