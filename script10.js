import java.util.Scanner;

public class LCMCalculator {
    // GCD олох функц
    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // LCM олох функц
    public static int findLCM(int a, int b) {
        return (a * b) / findGCD(a, b);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Хэрэглэгчээс 5 тоо авах
        System.out.println("5 тоо оруулна уу:");
        int[] numbers = new int[5];
        for (int i = 0; i < 5; i++) {
            numbers[i] = scanner.nextInt();
        }

        // 1-100 хүртэлх тоонуудыг numbers массив дахь тоо бүртэй үржүүлж LCM олох
        int lcm = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            lcm = findLCM(lcm, numbers[i]);
        }

        System.out.println("Оруулсан тоонуудын хамгийн бага ерөнхий хуваагдагч (LCM): " + lcm);

        // 1-100 хүртэлх үржвэртэй холбоотой үйлдэл
        for (int i = 1; i <= 100; i++) {
            int multiple = lcm * i; // LCM-ийн 1-100 хүртэл үржвэр
            System.out.println("LCM * " + i + " = " + multiple);
        }

        scanner.close();
    }
}
