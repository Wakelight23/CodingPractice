class MaxHeap {
  constructor() {
    this.heap = []; // 힙을 저장할 배열
  }

  // 요소 삽입 메소드
  insert(value) {
    this.heap.push(value); // 새 값을 힙 배열의 끝에 추가
    this.bubbleUp(); // 버블 업으로 올바른 위치로 재정렬
  }

  // 버블 업 메소드 - 이 메소드를 채워넣으세요!
  bubbleUp() {
    let index = this.heap.length - 1; // 삽입된 노드의 인덱스
    let parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스

    // 부모 노드와 비교하여 자리를 바꾸는 로직을 추가하세요!
    while (this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // 힙의 현재 상태를 출력하는 메소드
  printHeap() {
    console.log(this.heap);
  }
}

// 힙을 사용해볼 수 있는 예시
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(15);

maxHeap.printHeap(); // 현재 힙 상태 출력
