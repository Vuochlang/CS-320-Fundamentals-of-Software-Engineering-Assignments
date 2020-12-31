import org.junit.Test;
import java.util.*;
import static org.junit.Assert.*;

public class AdvancedTest {
    MyStack ms;

    /** === STEP 14 ===
     * Advanced Test 1: test to call top function on an empty stack
     * It will construct a MyStack (ms)
     * It will try to call top function on that ms and should receive the error message
     */
    @Test
    public void testTop(){
        ms = new MyStack();
        try{
            ms.top();
        }catch (EmptyStackException e){
            System.out.println("Error, cannot call Top on an empty stack");
        }
    }

    /** === STEP 15 ===
     * Advanced Test 2: test to push a number to a full stack
     * It will construct a MyStack (ms)
     * It will push 5 numbers to fulfill the stack,
     * Then it will try to push another number and it should display a message error
     */
    @Test
    public void testPushToFullStack(){
        ms = new MyStack();
        ms.push(1);
        ms.push(2);
        ms.push(3);
        ms.push(4);
        ms.push(5);

        try{
            ms.push(1);
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Error, cannot push to a full stack");
        }
    }

    /** === STEP 16 ===
     * Advanced Test 3: test the performance of push, pop and top function
     * It will push 4 numbers, pop a number and call top function
     * Then it will push another 2 numbers, call top function and pop 3 numbers
     * Then it will call top function again nd verify that the returned 3 top values are not the same.
     */
    @Test
    public void testPerformance(){
        int top1, top2, top3;
        ms = new MyStack();
        ms.push(1);
        ms.push(2);
        ms.push(3);
        ms.push(4);
        ms.pop();
        top1=ms.top(); //top1 should be 3
        ms.push(5);
        ms.push(6);
        top2=ms.top(); //top2 should be 6
        ms.pop();
        ms.pop();
        ms.pop();
        top3=ms.top(); //top3 should be 2
        assertEquals(3,top1);
        assertEquals(6,top2);
        assertEquals(2,top3);
     }
}
