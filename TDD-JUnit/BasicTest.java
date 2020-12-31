import org.junit.Test;
import java.util.*;
import static org.junit.Assert.*;

public class BasicTest {
    MyStack ms;

    /** === STEP 1 ===
     * Test 1: test empty stack
     * It will verify if a stack is empty after created it
     */
    @Test
    public void testIsEmpty(){
        ms = new MyStack();
        assertTrue(ms.IsEmpty());
    }

    /** === STEP 4 ===
     * Test 2: test the push-function to an empty stack
     * It will push a number to the stack and verify that the IsEmpty function returns false by using assertFalse()
     */
    @Test
    public void testPush(){
        ms=new MyStack();
        ms.push(1);
        assertFalse(ms.IsEmpty());
    }

    /** === STEP 6 ===
     * Test 3: test if IsEmpty returns true after called push and pop a number
     * It will push a number and pop the same number
     * then it will verify that IsEmpty function is true by using assertTrue()
     */
    @Test
    public void testPushPop(){
        ms=new MyStack();
        ms.push(2);
        ms.pop();
        assertTrue(ms.IsEmpty());
    }

    /** === STEP 8 ===
     * Test 4: test if the pushed number is the same as the popped number
     * It will stored an integer and push that integer
     * then call the pop function to get the number
     * then it will verify if the two numbers are the same using assertEquals()
     */
    @Test
    public void testRememberNumberPushPop(){
        ms = new MyStack();
        int pushNum=4, popNum;
        ms.push(pushNum);
        popNum=ms.pop();
        assertEquals(pushNum,popNum);
    }

    /** === STEP 9 ===
     * Test 5: test if the pop function returns values in the correct order
     * It will push 3 numbers and call pop 3 times
     * then it will verify if those 3 returned numbers are in the correct order
     */
    @Test
    public void testThreePushPop(){
        ms = new MyStack();
        int pn1=3, pn2=4, pn3=5;
        ms.push(pn1);
        ms.push(pn2);
        ms.push(pn3);
        assertEquals(pn3,ms.pop());
        assertEquals(pn2,ms.pop());
        assertEquals(pn1,ms.pop());
    }

    /** === STEP 10 ===
     * Test 6: test to try pop an empty stack
     * It will try to pop an empty and display an error message
     */
    @Test
    public void testPopEmptyStack(){
        ms = new MyStack();
        try {
            ms.pop();
        }catch(EmptyStackException e){
            System.out.println("Error, cannot pop an empty stack.");
        }
    }

    /** === STEP 11 ===
     * Test 7: test that IsEmpty function will return false after called Top-function
     * It will push a number and call Top-function
     * then it will verify that IsEmpty function returns false
     */
    @Test
    public void testPushCallTop(){
        ms = new MyStack();
        ms.push(1);
        ms.top();
        assertFalse(ms.IsEmpty());
    }

    /** === STEP 13 ===
     * Test 8: test that top function will return the correct number
     * It will push a number and call Top-function
     * then it will verify that the pushed number and the returned number is the same
     */
    @Test
    public void testPushTop(){
        ms = new MyStack();
        ms.push(2);
        assertEquals(2,ms.top());
    }
}
