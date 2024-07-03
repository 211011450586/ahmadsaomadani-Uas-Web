// Variabel global untuk menyimpan transaksi
let transactions = [];
let totalAmount = 0;

// Fungsi untuk menambahkan transaksi baru
function addTransaction() {
    const itemName = document.getElementById('item-name').value.trim();
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemName !== '' && !isNaN(itemPrice) && itemPrice > 0) {
        transactions.push({ name: itemName, price: itemPrice });
        updateTransactionList();
        calculateTotal();
        document.getElementById('item-name').value = '';
        document.getElementById('item-price').value = '';
    } else {
        alert('Silakan masukkan nama barang dan harga yang valid.');
    }
}

// Fungsi untuk memperbarui daftar transaksi
function updateTransactionList() {
    const itemList = document.getElementById('items');
    itemList.innerHTML = '';
    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.textContent = `${transaction.name}: Rp ${transaction.price.toFixed(2)}`;
        itemList.appendChild(li);
    });
}

// Fungsi untuk menghitung total harga
function calculateTotal() {
    totalAmount = transactions.reduce((total, transaction) => total + transaction.price, 0);
    document.getElementById('total').textContent = `Rp ${totalAmount.toFixed(2)}`;
}
