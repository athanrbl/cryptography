function keyEncryption() {
    number_string = str(number)
    if len(number_string) > 0 :
        a = int(number_string[0])
    else a=0
    if len(number_string) > 1 :
        b = int(number_string[1])
    else b=0
    if len(number_string)>2 :
        c = int(number_string[2:])
    else c=0

    while c>0 :
        a = a * 2
        c -= 1
    a += b
    print("private key:",(a))
}