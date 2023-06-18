enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}


const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(myStatus));

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}
