from real_estate.housing import Housing
from real_estate.dataset import Dataset


class Controller(object):

    @staticmethod
    def main():
        while 1:
            menu = input('0-Exit 1-modeling 2-DF')
            if menu == '0':
                break
            elif menu == '1':
                housing = Housing()
                dataset = Dataset()
                dataset.housing = housing.new_model('KB_housing')
                print(dataset.housing)
                Controller.print_this(dataset.housing)
            else:
                continue

    @staticmethod
    def print_this(this):
        print(f'Housing 의 type \n {type(this)} 이다.')
        print(f'Housing 의 column \n {this.columns} 이다.')
        print(f'Housing 의 상위 5개 행\n {type(this.head(1))} 이다.')
        print(f'Housing 의 null\n {this.isnull().sum()}개')


Controller.main()

