from real_estate.services import HousingService
from real_estate.models import HousingDto


class HousingApi(object):

    @staticmethod
    def main():
        while 1:
            menu = input('0-Exit 1-modeling 2-DF')
            if menu == '0':
                break
            elif menu == '1':
                housing = HousingService()
                Dto = HousingDto()
                Dto.housing = housing.new_model('KB_housing')
                print(Dto.housing)
                HousingApi.print_this(Dto.housing)
            else:
                continue

    @staticmethod
    def print_this(this):
        print(f'Housing 의 type \n {type(this)} 이다.')
        print(f'Housing 의 column \n {this.columns} 이다.')
        print(f'Housing 의 상위 5개 행\n {type(this.head(1))} 이다.')
        print(f'Housing 의 null\n {this.isnull().sum()}개')


HousingApi.main()

