import type { PracticalProgram, Category } from '../types';

export const PRACTICAL_PROGRAMS: PracticalProgram[] = [
  {
    id: 1,
    chitNumber: 1,
    title: 'Addition of two complex numbers using operator overloading',
    category: 'Operator Overloading',
    filename: 'chit01_complex_addition.cpp',
    code: `#include <iostream>
using namespace std;

class Complex {
    float real, imag;

public:
    void input() {
        cin >> real >> imag; // Enter real and imaginary parts
    }

    // Overload + operator
    Complex operator+(Complex c) {
        Complex temp;
        temp.real = real + c.real;
        temp.imag = imag + c.imag;
        return temp;
    }

    void display() {
        cout << real;
        if (imag >= 0)
            cout << " + " << imag << "i";
        else
            cout << " - " << -imag << "i";
        cout << endl;
    }
};

int main() {
    Complex c1, c2, result;

    cout << "Enter real and imaginary parts of first number: ";
    c1.input();
    cout << "Enter real and imaginary parts of second number: ";
    c2.input();

    result = c1 + c2; // Calls overloaded + operator
    cout << "Sum = ";
    result.display();

    return 0;
}`,
    sampleResult: 'Sample: inputs 2 3 and 4 5 -> Sum = 6 + 8i',
    vivaNote: 'The expression c1 + c2 calls c1.operator+(c2).'
  },
  {
    id: 2,
    chitNumber: 2,
    title: 'Subtraction of two complex numbers using operator overloading',
    category: 'Operator Overloading',
    filename: 'chit02_complex_subtraction.cpp',
    code: `#include <iostream>
using namespace std;

class Complex {
    float real, imag;

public:
    void input() {
        cin >> real >> imag;
    }

    // Overload - operator
    Complex operator-(Complex c) {
        Complex temp;
        temp.real = real - c.real;
        temp.imag = imag - c.imag;
        return temp;
    }

    void display() {
        cout << real;
        if (imag >= 0)
            cout << " + " << imag << "i";
        else
            cout << " - " << -imag << "i";
        cout << endl;
    }
};

int main() {
    Complex c1, c2, result;

    cout << "Enter real and imaginary parts of first number: ";
    c1.input();
    cout << "Enter real and imaginary parts of second number: ";
    c2.input();

    result = c1 - c2; // Calls overloaded - operator
    cout << "Difference = ";
    result.display();

    return 0;
}`,
    sampleResult: 'Sample: inputs 7 8 and 3 2 -> Difference = 4 + 6i',
    vivaNote: 'Subtract the real parts and imaginary parts separately.'
  },
  {
    id: 3,
    chitNumber: 3,
    title: 'Multiplication of two complex numbers using operator overloading',
    category: 'Operator Overloading',
    filename: 'chit03_complex_multiplication.cpp',
    code: `#include <iostream>
using namespace std;

class Complex {
    float real, imag;

public:
    void input() {
        cin >> real >> imag;
    }

    // Overload * operator
    Complex operator*(Complex c) {
        Complex temp;
        temp.real = real * c.real - imag * c.imag;
        temp.imag = real * c.imag + imag * c.real;
        return temp;
    }

    void display() {
        cout << real;
        if (imag >= 0)
            cout << " + " << imag << "i";
        else
            cout << " - " << -imag << "i";
        cout << endl;
    }
};

int main() {
    Complex c1, c2, result;

    cout << "Enter real and imaginary parts of first number: ";
    c1.input();
    cout << "Enter real and imaginary parts of second number: ";
    c2.input();

    result = c1 * c2; // Calls overloaded * operator
    cout << "Product = ";
    result.display();

    return 0;
}`,
    sampleResult: 'Sample: inputs 2 3 and 4 5 -> Product = -7 + 22i',
    vivaNote: 'Formula: (a+bi)(c+di) = (ac-bd) + (ad+bc)i; i² = -1.'
  },
  {
    id: 4,
    chitNumber: 4,
    title: 'Linear search in an array',
    category: 'Searching & Sorting',
    filename: 'chit04_linear_search.cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    int a[100], n, key, i;
    bool found = false;

    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter array elements: ";
    for (i = 0; i < n; i++)
        cin >> a[i];

    cout << "Enter key to search: ";
    cin >> key;

    // Check each element sequentially
    for (i = 0; i < n; i++) {
        if (a[i] == key) {
            cout << "Element found at position " << i + 1;
            found = true;
            break;
        }
    }

    if (!found)
        cout << "Element not found";

    return 0;
}`,
    sampleResult: 'Sample: array 10 20 30 40 50, key 30 -> Element found at position 3',
    vivaNote: 'Works on sorted or unsorted arrays. Time complexity: O(n).'
  },
  {
    id: 5,
    chitNumber: 5,
    title: 'Binary search on a sorted array',
    category: 'Searching & Sorting',
    note: 'Important: The input array must be sorted in ascending order.',
    filename: 'chit05_binary_search.cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    int a[100], n, key;
    int low, high, mid;
    bool found = false;

    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter sorted array elements: ";
    for (int i = 0; i < n; i++)
        cin >> a[i];

    cout << "Enter key to search: ";
    cin >> key;

    low = 0;
    high = n - 1;

    // Continue while the search range is valid
    while (low <= high) {
        mid = low + (high - low) / 2;

        if (a[mid] == key) {
            cout << "Element found at position " << mid + 1;
            found = true;
            break;
        } else if (key < a[mid]) {
            high = mid - 1; // Search left half
        } else {
            low = mid + 1; // Search right half
        }
    }

    if (!found)
        cout << "Element not found";

    return 0;
}`,
    sampleResult: 'Sample: sorted array 10 20 30 40 50, key 40 -> Element found at position 4',
    vivaNote: 'Array must be sorted in ascending order. Time complexity: O(log n).'
  },
  {
    id: 6,
    chitNumber: 6,
    title: 'Bubble sort',
    category: 'Searching & Sorting',
    filename: 'chit06_bubble_sort.cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    int a[100], n, temp;

    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++)
        cin >> a[i];

    // Each pass moves a large element toward the end
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                // Swap adjacent elements
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << a[i] << " ";

    return 0;
}`,
    sampleResult: 'Sample: 5 1 4 2 3 -> Sorted array: 1 2 3 4 5',
    vivaNote: 'Compares adjacent elements and swaps when needed. Average/worst case: O(n²).'
  },
  {
    id: 7,
    chitNumber: 7,
    title: 'Selection sort',
    category: 'Searching & Sorting',
    filename: 'chit07_selection_sort.cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    int a[100], n, minIndex, temp;

    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++)
        cin >> a[i];

    // Select the smallest element for each position
    for (int i = 0; i < n - 1; i++) {
        minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (a[j] < a[minIndex])
                minIndex = j;
        }

        // Place the smallest element at position i
        temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << a[i] << " ";

    return 0;
}`,
    sampleResult: 'Sample: 64 25 12 22 11 -> Sorted array: 11 12 22 25 64',
    vivaNote: 'Finds the minimum in the unsorted portion. Time complexity: O(n²).'
  },
  {
    id: 8,
    chitNumber: 8,
    title: 'Insert a node at the beginning of a singly linked list',
    category: 'Singly Linked List',
    filename: 'chit08_sll_insert_beginning.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, value;

    cout << "Enter number of existing nodes: ";
    cin >> n;

    // Create the initial linked list
    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->next = NULL;

        if (head == NULL)
            head = tail = newNode;
        else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    cout << "Enter value to insert at beginning: ";
    cin >> value;

    newNode = new Node;
    newNode->data = value;
    newNode->next = head; // Link new node to old head
    head = newNode; // Update head

    cout << "Linked list: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30, insert 5 -> 5 10 20 30',
    vivaNote: 'Insertion at the beginning takes O(1) time.'
  },
  {
    id: 9,
    chitNumber: 9,
    title: 'Insert a node at the end of a singly linked list',
    category: 'Singly Linked List',
    filename: 'chit09_sll_insert_end.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, value;

    cout << "Enter number of existing nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->next = NULL;

        if (head == NULL)
            head = tail = newNode;
        else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    cout << "Enter value to insert at end: ";
    cin >> value;

    newNode = new Node;
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        Node* temp = head;
        // Move to the last node
        while (temp->next != NULL)
            temp = temp->next;
        temp->next = newNode;
    }

    cout << "Linked list: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30, insert 40 -> 10 20 30 40',
    vivaNote: 'This version traverses the list, so insertion at end takes O(n).'
  },
  {
    id: 10,
    chitNumber: 10,
    title: 'Insert a node at a middle position in a singly linked list',
    category: 'Singly Linked List',
    note: 'Positions are 1-based: position 1 is the first node.',
    filename: 'chit10_sll_insert_middle.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, value, pos;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->next = NULL;

        if (head == NULL)
            head = tail = newNode;
        else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    cout << "Enter value to insert: ";
    cin >> value;
    cout << "Enter position: ";
    cin >> pos;

    if (pos < 1 || pos > n + 1) {
        cout << "Invalid position";
        return 0;
    }

    newNode = new Node;
    newNode->data = value;

    if (pos == 1) {
        newNode->next = head;
        head = newNode;
    } else {
        Node* temp = head;
        // Stop at the node just before the required position
        for (int i = 1; i < pos - 1; i++)
            temp = temp->next;

        newNode->next = temp->next;
        temp->next = newNode;
    }

    cout << "Linked list: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 40, insert 25 at position 3 -> 10 20 25 30 40',
    vivaNote: 'Positions are 1-based; position 1 means the beginning.'
  },
  {
    id: 11,
    chitNumber: 11,
    title: 'Delete a node from the beginning of a singly linked list',
    category: 'Singly Linked List',
    filename: 'chit11_sll_delete_beginning.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->next = NULL;

        if (head == NULL)
            head = tail = newNode;
        else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    if (head == NULL) {
        cout << "List is empty";
        return 0;
    }

    Node* temp = head; // Store first node
    head = head->next; // Move head to next node
    delete temp; // Free removed node

    cout << "Linked list after deletion: ";
    temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 -> 20 30',
    vivaNote: 'Check for an empty list first. Deletion at beginning takes O(1).'
  },
  {
    id: 12,
    chitNumber: 12,
    title: 'Delete a node from the end of a singly linked list',
    category: 'Singly Linked List',
    filename: 'chit12_sll_delete_end.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->next = NULL;

        if (head == NULL)
            head = tail = newNode;
        else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    if (head == NULL) {
        cout << "List is empty";
        return 0;
    }

    // Handle a list containing only one node
    if (head->next == NULL) {
        delete head;
        head = NULL;
    } else {
        Node* temp = head;
        // Find the second-last node
        while (temp->next->next != NULL)
            temp = temp->next;

        delete temp->next; // Delete last node
        temp->next = NULL;
    }

    cout << "Linked list after deletion: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 40 -> 10 20 30',
    vivaNote: 'Traverse to the second-last node, delete the last, and set next to NULL. O(n).'
  },
  {
    id: 13,
    chitNumber: 13,
    title: 'Delete a node from a middle position in a singly linked list',
    category: 'Singly Linked List',
    note: 'Positions are 1-based: position 1 is the first node.',
    filename: 'chit13_sll_delete_middle.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, pos;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->next = NULL;

        if (head == NULL)
            head = tail = newNode;
        else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    cout << "Enter position to delete: ";
    cin >> pos;

    if (pos < 1 || pos > n) {
        cout << "Invalid position";
        return 0;
    }

    Node* temp = head;
    if (pos == 1) {
        head = head->next;
        delete temp;
    } else {
        // Move to node before target
        for (int i = 1; i < pos - 1; i++)
            temp = temp->next;

        Node* delNode = temp->next;
        temp->next = delNode->next; // Skip target
        delete delNode;
    }

    cout << "List after deletion: ";
    temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 40, delete position 3 -> 10 20 40',
    vivaNote: "Use delete to release the removed node's dynamically allocated memory."
  },
  {
    id: 14,
    chitNumber: 14,
    title: 'Insert a node at the beginning of a doubly linked list',
    category: 'Doubly Linked List',
    filename: 'chit14_dll_insert_beginning.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, value;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->prev = tail;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
            tail->next = newNode;
        tail = newNode;
    }

    cout << "Enter value to insert: ";
    cin >> value;

    newNode = new Node;
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = head;

    if (head != NULL)
        head->prev = newNode;
    else
        tail = newNode;

    head = newNode;

    cout << "Doubly linked list: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30, insert 5 -> 5 10 20 30',
    vivaNote: 'A doubly linked list has prev and next pointers.'
  },
  {
    id: 15,
    chitNumber: 15,
    title: 'Insert a node at the end of a doubly linked list',
    category: 'Doubly Linked List',
    filename: 'chit15_dll_insert_end.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, value;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->prev = tail;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
            tail->next = newNode;
        tail = newNode;
    }

    cout << "Enter value to insert at end: ";
    cin >> value;

    newNode = new Node;
    newNode->data = value;
    newNode->next = NULL;
    newNode->prev = tail;

    if (head == NULL)
        head = newNode;
    else
        tail->next = newNode;

    tail = newNode;

    cout << "Doubly linked list: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30, insert 40 -> 10 20 30 40',
    vivaNote: "The new node's prev points to the old tail."
  },
  {
    id: 16,
    chitNumber: 16,
    title: 'Insert a node at a middle position in a doubly linked list',
    category: 'Doubly Linked List',
    note: 'Positions are 1-based: position 1 is the first node.',
    filename: 'chit16_dll_insert_middle.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, value, pos;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->prev = tail;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
            tail->next = newNode;
        tail = newNode;
    }

    cout << "Enter value to insert: ";
    cin >> value;
    cout << "Enter position: ";
    cin >> pos;

    if (pos < 1 || pos > n + 1) {
        cout << "Invalid position";
        return 0;
    }

    newNode = new Node;
    newNode->data = value;

    if (pos == 1) {
        newNode->prev = NULL;
        newNode->next = head;

        if (head != NULL)
            head->prev = newNode;
        else
            tail = newNode;

        head = newNode;
    } else {
        Node* temp = head;
        for (int i = 1; i < pos - 1; i++)
            temp = temp->next;

        newNode->next = temp->next;
        newNode->prev = temp;

        if (temp->next != NULL)
            temp->next->prev = newNode;
        else
            tail = newNode;

        temp->next = newNode;
    }

    cout << "Doubly linked list: ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 40, insert 25 at position 3 -> 10 20 25 30 40',
    vivaNote: 'Update both prev and next links when inserting.'
  },
  {
    id: 17,
    chitNumber: 17,
    title: 'Delete a node from the beginning of a doubly linked list',
    category: 'Doubly Linked List',
    filename: 'chit17_dll_delete_beginning.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->prev = tail;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
            tail->next = newNode;
        tail = newNode;
    }

    if (head == NULL) {
        cout << "List is empty";
        return 0;
    }

    Node* temp = head;
    head = head->next;

    if (head != NULL)
        head->prev = NULL;
    else
        tail = NULL; // Only one node existed

    delete temp;

    cout << "List after deletion: ";
    temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 -> 20 30',
    vivaNote: 'Deletion at beginning takes O(1) time.'
  },
  {
    id: 18,
    chitNumber: 18,
    title: 'Delete a node from the end of a doubly linked list',
    category: 'Doubly Linked List',
    filename: 'chit18_dll_delete_end.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->prev = tail;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
            tail->next = newNode;
        tail = newNode;
    }

    if (tail == NULL) {
        cout << "List is empty";
        return 0;
    }

    Node* temp = tail;
    tail = tail->prev;

    if (tail != NULL)
        tail->next = NULL;
    else
        head = NULL; // Only one node existed

    delete temp;

    cout << "List after deletion: ";
    temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 40 -> 10 20 30',
    vivaNote: 'With a tail pointer, deleting the last node takes O(1) time.'
  },
  {
    id: 19,
    chitNumber: 19,
    title: 'Delete a node from a middle position in a doubly linked list',
    category: 'Doubly Linked List',
    note: 'Positions are 1-based: position 1 is the first node.',
    filename: 'chit19_dll_delete_middle.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

int main() {
    Node *head = NULL, *tail = NULL, *newNode;
    int n, pos;

    cout << "Enter number of nodes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        newNode = new Node;
        cin >> newNode->data;
        newNode->prev = tail;
        newNode->next = NULL;

        if (head == NULL)
            head = newNode;
        else
            tail->next = newNode;
        tail = newNode;
    }

    cout << "Enter position to delete: ";
    cin >> pos;

    if (pos < 1 || pos > n) {
        cout << "Invalid position";
        return 0;
    }

    Node* temp = head;
    for (int i = 1; i < pos; i++)
        temp = temp->next;

    // Connect previous node to next node
    if (temp->prev != NULL)
        temp->prev->next = temp->next;
    else
        head = temp->next;

    // Connect next node to previous node
    if (temp->next != NULL)
        temp->next->prev = temp->prev;
    else
        tail = temp->prev;

    delete temp;

    cout << "List after deletion: ";
    temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }

    return 0;
}`,
    sampleResult: 'Sample: list 10 20 30 40, delete position 2 -> 10 30 40',
    vivaNote: 'Update both neighboring links; positions are 1-based.'
  },
  {
    id: 20,
    chitNumber: 20,
    title: 'Implement a stack using an array',
    category: 'Stack',
    filename: 'chit20_stack_array.cpp',
    code: `#include <iostream>
using namespace std;

#define SIZE 5

int stack[SIZE];
int top = -1; // -1 means stack is empty

void push(int value) {
    if (top == SIZE - 1) {
        cout << "Stack Overflow\\n";
        return;
    }
    stack[++top] = value;
    cout << "Element pushed\\n";
}

void pop() {
    if (top == -1) {
        cout << "Stack Underflow\\n";
        return;
    }
    cout << "Popped element: " << stack[top--] << endl;
}

void display() {
    if (top == -1) {
        cout << "Stack is empty\\n";
        return;
    }
    cout << "Stack (top to bottom): ";
    for (int i = top; i >= 0; i--)
        cout << stack[i] << " ";
    cout << endl;
}

int main() {
    int choice, value;
    do {
        cout << "\\n1. Push\\n2. Pop\\n3. Display\\n4. Exit\\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value: ";
                cin >> value;
                push(value);
                break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: cout << "Exiting\\n"; break;
            default: cout << "Invalid choice\\n";
        }
    } while (choice != 4);

    return 0;
}`,
    sampleResult: 'Sample: push 10, push 20, display -> Stack (top to bottom): 20 10',
    vivaNote: 'Stack follows LIFO. Overflow = full stack; underflow = empty stack. Push/pop O(1).'
  },
  {
    id: 21,
    chitNumber: 21,
    title: 'Implement a stack using a linked list',
    category: 'Stack',
    filename: 'chit21_stack_linked_list.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node* top = NULL;

void push(int value) {
    Node* newNode = new Node;
    newNode->data = value;
    newNode->next = top;
    top = newNode; // New node becomes top
    cout << "Element pushed\\n";
}

void pop() {
    if (top == NULL) {
        cout << "Stack Underflow\\n";
        return;
    }
    Node* temp = top;
    cout << "Popped element: " << temp->data << endl;
    top = top->next;
    delete temp;
}

void display() {
    if (top == NULL) {
        cout << "Stack is empty\\n";
        return;
    }
    cout << "Stack (top to bottom): ";
    Node* temp = top;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main() {
    int choice, value;
    do {
        cout << "\\n1. Push\\n2. Pop\\n3. Display\\n4. Exit\\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value: ";
                cin >> value;
                push(value);
                break;
            case 2: pop(); break;
            case 3: display(); break;
            case 4: cout << "Exiting\\n"; break;
            default: cout << "Invalid choice\\n";
        }
    } while (choice != 4);

    return 0;
}`,
    sampleResult: 'Sample: push 10, push 20, display -> Stack (top to bottom): 20 10',
    vivaNote: 'Stack follows LIFO. A linked-list stack grows dynamically; push/pop O(1).'
  },
  {
    id: 22,
    chitNumber: 22,
    title: 'Implement a queue using an array (linear queue)',
    category: 'Queue',
    filename: 'chit22_queue_array.cpp',
    code: `#include <iostream>
using namespace std;

#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int value) {
    if (rear == SIZE - 1) {
        cout << "Queue Overflow\\n";
        return;
    }
    if (front == -1)
        front = 0; // First inserted element
    queue[++rear] = value;
    cout << "Element inserted\\n";
}

void dequeue() {
    if (front == -1 || front > rear) {
        cout << "Queue Underflow\\n";
        return;
    }
    cout << "Deleted element: " << queue[front];
    front++;
    // Reset when all elements have been removed
    if (front > rear)
        front = rear = -1;
    cout << endl;
}

void display() {
    if (front == -1) {
        cout << "Queue is empty\\n";
        return;
    }
    cout << "Queue: ";
    for (int i = front; i <= rear; i++)
        cout << queue[i] << " ";
    cout << endl;
}

int main() {
    int choice, value;
    do {
        cout << "\\n1. Enqueue\\n2. Dequeue\\n3. Display\\n4. Exit\\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value: ";
                cin >> value;
                enqueue(value);
                break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: cout << "Exiting\\n"; break;
            default: cout << "Invalid choice\\n";
        }
    } while (choice != 4);

    return 0;
}`,
    sampleResult: 'Sample: enqueue 10, enqueue 20, display -> Queue: 10 20; dequeue -> Deleted element: 10',
    vivaNote: 'Queue follows FIFO. This linear queue may waste freed slots until reset.'
  },
  {
    id: 23,
    chitNumber: 23,
    title: 'Implement a queue using a linked list',
    category: 'Queue',
    filename: 'chit23_queue_linked_list.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node *front = NULL, *rear = NULL;

void enqueue(int value) {
    Node* newNode = new Node;
    newNode->data = value;
    newNode->next = NULL;

    if (rear == NULL) {
        front = rear = newNode; // Queue was empty
    } else {
        rear->next = newNode;
        rear = newNode;
    }
    cout << "Element inserted\\n";
}

void dequeue() {
    if (front == NULL) {
        cout << "Queue Underflow\\n";
        return;
    }
    Node* temp = front;
    cout << "Deleted element: " << temp->data << endl;
    front = front->next;
    delete temp;

    if (front == NULL)
        rear = NULL; // Queue became empty
}

void display() {
    if (front == NULL) {
        cout << "Queue is empty\\n";
        return;
    }
    cout << "Queue: ";
    Node* temp = front;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main() {
    int choice, value;
    do {
        cout << "\\n1. Enqueue\\n2. Dequeue\\n3. Display\\n4. Exit\\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value: ";
                cin >> value;
                enqueue(value);
                break;
            case 2: dequeue(); break;
            case 3: display(); break;
            case 4: cout << "Exiting\\n"; break;
            default: cout << "Invalid choice\\n";
        }
    } while (choice != 4);

    return 0;
}`,
    sampleResult: 'Sample: enqueue 10, enqueue 20, display -> Queue: 10 20; dequeue -> Deleted element: 10',
    vivaNote: 'Queue follows FIFO. Enqueue/dequeue are O(1) with front and rear pointers.'
  },
  {
    id: 24,
    chitNumber: 24,
    title: 'Insert nodes into a BST and display using inorder traversal',
    category: 'Binary Search Tree',
    filename: 'chit24_bst_insert_inorder.cpp',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

Node* createNode(int value) {
    Node* newNode = new Node;
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Insert a value into the BST
Node* insert(Node* root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);

    // Duplicate values are ignored
    return root;
}

// Inorder: Left, Root, Right
void inorder(Node* root) {
    if (root == NULL)
        return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

int main() {
    Node* root = NULL;
    int n, value;

    cout << "Enter number of nodes: ";
    cin >> n;
    cout << "Enter node values: ";
    for (int i = 0; i < n; i++) {
        cin >> value;
        root = insert(root, value);
    }

    cout << "Inorder traversal: ";
    inorder(root);
    cout << endl;

    return 0;
}`,
    sampleResult: 'Sample: input 50 30 70 20 40 60 -> Inorder traversal: 20 30 40 50 60 70',
    vivaNote: 'BST: smaller values left, larger values right. Inorder = Left, Root, Right; average insert O(log n), worst case O(n).'
  }
];

export const CATEGORIES: Category[] = [
  'All',
  'Operator Overloading',
  'Searching & Sorting',
  'Singly Linked List',
  'Doubly Linked List',
  'Stack',
  'Queue',
  'Binary Search Tree'
];
