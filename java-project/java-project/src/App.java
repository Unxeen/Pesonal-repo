import java.util.Scanner;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;

public class App {
    public static void main(String[] args){
        // new user
        User user = new User("Ayoub", "2001-01-01");

        // new book
        Book book = new Book("Carmilla", "Sheridan Le Fanu");

        // user borrows book
        user.borrow(book);

        System.out.printf("%s was born in %s and is now %d years old.\n",
        user.getName(),
        user.getBirthDay(),
        user.getAge()
        );

        System.out.printf("user has borrowed the books: %s \n", user.borrowedBooks());

        System.out.printf("The book %s was written by %s.", book.getTitle(), book.getAuthor());
        
        
    }
    
}