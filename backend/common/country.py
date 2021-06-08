# 객체지향 프로그래밍
class Country(object): #SuperClass
    name = '국가명'
    population = '인구'
    capital = '수도'

    def show(self):
        print('국가 클래스의 메소드입니다')

class Korea(Country): #SubClass

    def show_name(self):
        print(f'Country name is {self.name}')


def main(): # 함수형 프로그래밍
    k = Korea()
    k.name ="대한민국"
    k.show_name()

main()








