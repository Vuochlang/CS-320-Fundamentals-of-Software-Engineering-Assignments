import java.util.*;

public class MyStack {
        int[] array;
        int max_size=5;
        int item_stored=0;

    /** === STEP 2 ===
     * Function 1: Create a construction function called "MyStack"
     * It will construct an empty array of Integer of size 5
     */
    public MyStack() {
        array = new int[max_size];
    }

    /** === STEP 3 ===
     * Function 2: Create an IsEmpty function
     * It will return a boolean:
     *    true : if the stack is empty
     *    false : if the stack is not empty
     */
    public boolean IsEmpty(){
        if(item_stored==0)
            return true;
        else
            return false;
    }

    /** === STEP 5 ===
     * Function 3: Create a push function
     * It will function as a push function of a stack
     * It will store the parameter (an Integer) to the created MyStack (ms)
     */
    public void push(int a){
        if(item_stored==5){
            throw new ArrayIndexOutOfBoundsException();
        }

        if(item_stored==0){
            array[item_stored]=a;
            item_stored++;
            return;
        }

        for(int i=item_stored; i>0; i--){
            array[i]= array[i-1];
        }
        array[0]=a;
        item_stored++;

    }

    /** === STEP 7 ===
     * Function 4: Create a pop function
     * It will function as a pop function of a stack
     * It will return the first integer stored in the array and move everything up an index
     */
    public int pop(){
        int popNum= array[0];
        if(item_stored==0)
            throw new EmptyStackException();

        for(int i=0; i<item_stored-1; i++){
            array[i]= array[i+1];
        }
        array[item_stored-1]=0;
        item_stored--;

        return popNum;
    }

    /** === STEP 12 ===
     * Function 5: Create a top function
     * It will return the value of the data stored in the index 0 of the array (arrayInt)
     */
    public int top(){
        if (item_stored==0)
            throw new EmptyStackException();
        return(array[0]);
    }
}
