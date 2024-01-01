import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;

public class User {
    private String name;
    private LocalDate birthDay;

    private ArrayList<Book> books = new ArrayList<>();

    User(String name, String birthDay){
        this.name = name;
        this.birthDay = LocalDate.parse(birthDay);
    }

    public String getName(){
        return this.name;
    }

    public String getBirthDay(){
        return this.birthDay.toString();
    }

    public String borrowedBooks(){
        return this.books.toString();
    }

    public void borrow(Book book){
        if (book instanceof Book) {
            this.books.add(book);
            System.out.println("Book borrowed successfully!");
        } else {
            System.out.println("Book does not exist.");
        }
    }

    public int getAge(){
        int age = Period.between(this.birthDay, LocalDate.now()).getYears();

        return age;
    }
}
